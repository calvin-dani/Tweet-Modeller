def transcribe_file():
    """Transcribe the given audio file."""
    from google.cloud import speech
    import io


    print("____INITIALIZE CLOUD SERVICES_____")
    client = speech.SpeechClient()

    print("____INITIALIZE AUDIO FILE SERVICES_____")
    with io.open('..\\..\\Resources\\sampleAudios\\testing2.wav', "rb") as audio_file:
        content = audio_file.read()

    print("____INITIALIZE CONFIG FILE SERVICES_____")
    audio = speech.RecognitionAudio(content=content)
    config = speech.RecognitionConfig(
        language_code="en-US",
        sample_rate_hertz=16000,
        audio_channel_count=2,
    )

    print("____INITIALIZE CONVERSION_____")
    operation = client.long_running_recognize(config=config, audio=audio)

    print("Waiting for operation to complete...")
    response = operation.result(timeout=90)
    # Each result is for a consecutive portion of the audio. Iterate through
    # them to get the transcripts for the entire audio file.
    text = ''
    print("____WRITING CONVERSION TO TEXT_____")
    for result in response.results:
        # The first alternative is the most likely one for this portion.
        text += result.alternatives[0].transcript
    
    with open('..\\..\\Resources\\sampleTexts\\testing2.txt', 'w') as fhandle:
        fhandle.write(text)

transcribe_file()