class Recognition {
  recognition;
  config = {
    lang: "en-US",
    interimResults: false,
    maxAlternatives: 1,
    continuous: true
  };

  constructor(configuration) {
    if (configuration !== undefined) {
      this.config.interimResults =
        configuration.interimResults || this.config.interimResults;
      this.config.lang = configuration.lang || this.config.lang;
      this.config.maxAlternatives =
        configuration.maxAlternatives || this.config.maxAlternatives;
    }
    this.recognition = new window.webkitSpeechRecognition();

    this.recognition.lang = this.config.lang;
    this.recognition.interimResults = this.config.interimResults;
    this.recognition.maxAlternatives = this.config.maxAlternatives;
    this.recognition.continuous = this.config.continuous;
  }

  start() {
    console.log("calling start");
    try {
      this.recognition.start();
    } catch (error) {
      console.log(error);
    }
  }

  stop() {
    console.log("calling stop");
    try {
      this.recognition.stop();
    } catch (error) {
      console.log(error);
    }
  }

  getResult() {
    return this.recognition;
  }

  onError() {
    this.recognition.onerror = error => {
      console.log(error);
    };
  }

  onspeechEnd = () => {
    this.recognition.onspeechend = event => {
      console.log(event);
    };
  };

  onResult() {
    this.recognition.onresult = event => {
      var last = event.results.length - 1;
      var color = event.results[last][0].transcript;
      console.log(color);
    };
  }
}

export default Recognition;
