const common = require('../method/common');
const intents = require('../constants/intents');

const HelpHandler = {
    canHandle(handlerInput) {
        return common.checkRequestTypeAndName(handlerInput, 'IntentRequest', intents.HELP);
    },
    handle(handlerInput) {
        return common.speakAndReprompt(handlerInput,"PROVA")
    },
};

module.exports = HelpHandler;
