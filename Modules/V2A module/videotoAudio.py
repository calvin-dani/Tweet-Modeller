import os.path
from moviepy.editor import *
from os import *

print("________FETCHING VIDEO RESOURCES___________")
videoList = list(listdir(".\\..\\..\\Resources\\sampleVideos"))
print("________FINISHED FETCHING VIDEO RESOURCES___________")


print("________CONVERTING VIDEO RESOURCES___________")
for videoName in videoList:
    print(f"_____________CONVERTING {videoName} RESOURCES___________")
    video = VideoFileClip(os.path.join(f".\\..\\..\\Resources\\sampleVideos\\{videoName}"))
    video.audio.write_audiofile(f".\\..\\..\\Resources\\sampleAudios\\{videoName[:-4]}.wav",fps=16000,codec="pcm_s16le")
    print(f"__________FINISHED CONVERTING {videoName} RESOURCES___________")
print("__________FINISHED VIDEO RESOURCES___________")