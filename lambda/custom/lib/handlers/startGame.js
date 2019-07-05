const common = require('../method/common');
const intents = require('../constants/intents');
const messages = require('../constants/messages');

const StartGameHandler = {
	canHandle(handlerInput) {
		return common.checkRequestTypeAndName(handlerInput, 'IntentRequest', intents.START_GAME);
	},
	handle(handlerInput) {
		const slots = handlerInput.requestEnvelope.request.intent.slots;
		const playerOne = slots['playerOne'];
		const playerTwo = slots['playerTwo'];
		const maxPoints = slots['maxPoints'];

		const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
		sessionAttributes.playerOne = playerOne;
		sessionAttributes.playerTwo = playerTwo;
		sessionAttributes.maxPoints = maxPoints;
		handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

		return common.speakAndReprompt(handlerInput, messages.START_GAME(playerOne, playerTwo, maxPoints))
	},
};

module.exports = StartGameHandler;
