# -*- coding: utf-8 -*-
""" 
@author: zurab
"""

import cv2
import dlib
import face_recognition


misha_image = face_recognition.load_image_file("images/misha.jpg")
misha_face_encoding = face_recognition.face_encodings(misha_image)[0]

bidzina_image = face_recognition.load_image_file("images/bidzina.jpg")
bidzina_face_encoding = face_recognition.face_encodings(bidzina_image)[0]

face_encodings = [misha_face_encoding, bidzina_face_encoding]
known_faces = ['Mikheil Saakashvili', 'Bidzina Ivanishvili']

image_to_detect = face_recognition.load_image_file("images/mishabidz2.jpg")

faces_locations = face_recognition.face_locations(image_to_detect, model="hog", number_of_times_to_upsample=2)
faces_encodings = face_recognition.face_encodings(image_to_detect, faces_locations)

for one_face_location, one_face_encoding in zip(faces_locations, faces_encodings):
    top_pos, right_pos, bottom_pos, left_pos = one_face_location

    matches = face_recognition.compare_faces(face_encodings, one_face_encoding)
    name = "Not found"

    if True in matches:
        match_index = matches.index(True)
        name = known_faces[match_index]
        

    print('Name:  ' + name)
