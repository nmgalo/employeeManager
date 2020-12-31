# -*- coding: utf-8 -*-
""" 
@author: zurab
"""

import cv2
import face_recognition
from numpy import load
import time
from transliterate import translit
import sys
import requests
import os


start = time.time()
all_file_names = load('./utility/FaceRec/dataset/female_names.npy')
all_face_encodings = load('./utility/FaceRec/dataset/female_encodings.npy')

img_data = requests.get(sys.argv[1]).content
with open('face_to_recognize.jpg', 'wb') as handler:
    handler.write(img_data)


image_to_scan = "face_to_recognize.jpg"

starting_image = cv2.imread(image_to_scan)


image_to_detect = face_recognition.load_image_file(image_to_scan)
faces_locations = face_recognition.face_locations(image_to_detect, model="hog", number_of_times_to_upsample=4)
faces_encodings = face_recognition.face_encodings(image_to_detect, faces_locations, num_jitters=15,model="large")
face_distances = face_recognition.face_distance(all_face_encodings, faces_encodings)

def roundToPercentage(x):
    x = round(((1-float(x))*100),2)
    return x

name_index = {}

for i,face_distance in enumerate(face_distances):
    name_index.update( {all_file_names[i] : face_distance} )
       
name_index = {k: v for k, v in sorted(name_index.items(), key=lambda item: item[1])}



for one_face_location, one_face_encoding in zip(faces_locations, faces_encodings):
    top_pos, right_pos, bottom_pos, left_pos = one_face_location


for x in range(15):
    print('Probability: {}% Name: {}'.format(roundToPercentage(list(name_index.values())[x]) ,list(name_index.keys())[x][:-4]))
    sys.stdout.flush()

name = list(name_index.keys())[0]
end = time.time()



os.remove("test.jpg")