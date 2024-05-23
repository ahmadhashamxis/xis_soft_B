from flask import Flask
import cv2
import numpy as np
from ultralytics import YOLO
import asyncio
import websockets
#from pyueye import ueye
import time

app = Flask(__name__)

def generate_frames():
    model = YOLO('yolov8n.pt')
    cap = cv2.VideoCapture(0)
    
    frame_count = 0
    start_time = time.time()
    while cap.isOpened():
        success, frame = cap.read()
        if success:
            
            results = model(frame)
                        
            annotated_frame = results[0].plot()
            ret, buffer = cv2.imencode('.jpg', annotated_frame)
            if not ret:
                continue
            
            frame_bytes = buffer.tobytes()
            frame_count += 1
            yield frame_bytes
            if frame_count == 10:
                    end_time = time.time()  # Record the end time after processing 10 frames
                    time_taken = end_time - start_time
                    print(f'Time for 10 frames: {time_taken} seconds')
                    frame_count = 0
                    start_time = time.time()

async def video_feed(websocket, path):
    for frame in generate_frames():
        await websocket.send(frame)

@app.route('/video_feed')
def video_feed_route():
    return 'WebSocket connection needed for video feed'

if __name__ == '__main__':
    
    print("Flask server is running !")
    start_server = websockets.serve(video_feed, "127.0.0.1", 5000)

    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()
