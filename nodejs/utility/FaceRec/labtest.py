# -*- coding: utf-8 -*-
"""
@author: zurab
"""

import cv2
import face_recognition
from numpy import load
from transliterate import translit
import os
import sys
from transliterate import translit
import requests
import json

# all_file_names = load('../../utility/FaceRec/dataset/female_names.npy')
# all_face_encodings = load('../../utility/FaceRec/dataset/female_encodings.npy')
all_file_names = load('./utility/FaceRec/dataset/female_names.npy')
all_face_encodings = load('./utility/FaceRec/dataset/female_encodings.npy')


image_to_scan = "sampleTA.jpg"

starting_image = cv2.imread(image_to_scan)

image_to_detect = face_recognition.load_image_file(image_to_scan)
faces_locations = face_recognition.face_locations(image_to_detect, model="hog", number_of_times_to_upsample=4)
faces_encodings = face_recognition.face_encodings(image_to_detect, faces_locations, num_jitters=5, model="large")
face_distances = face_recognition.face_distance(all_face_encodings, faces_encodings)


def roundToPercentage(x):
    x = round(((1 - float(x)) * 100), 2)
    return x


name_index = {}

for i, face_distance in enumerate(face_distances):
    name_index.update({all_file_names[i]: face_distance})

name_index = {k: v for k, v in sorted(name_index.items(), key=lambda item: item[1])}

for one_face_location, one_face_encoding in zip(faces_locations, faces_encodings):
    top_pos, right_pos, bottom_pos, left_pos = one_face_location

results = {"Name": [], "Probability": []}

for x in range(5):
    results["Name"].append(translit(list(name_index.keys())[x][:-4], 'ka', reversed=True))
    results["Probability"].append(roundToPercentage(list(name_index.values())[x]))

# print(str(results))
print(json.dumps(results))
sys.stdout.flush()

name = list(name_index.keys())[0]

