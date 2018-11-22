const dialogFlow = require('dialogflow');

class DialogFlow {
  constructor({ projectId, sessionId }) {
    this._projectId = projectId;
    this._sessionId = sessionId;

    this._sessionClient = new dialogFlow.SessionsClient();

    this._sessionPath = this._sessionClient.sessionPath(this._projectId, this._sessionId);

    this._request = {
      session: this._sessionPath,
      queryInput: {
        text: {
          text: ''
        }
      }
    };

    this._setRequestText = ({ text }) => {
      this._request.queryInput.text.text = text;
    };
  }

  requestIntent({ text }) {
    this._setRequestText({ text });

    return this._sessionClient(this._request);
  }
}

module.exports = DialogFlow;
