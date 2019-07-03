const common = require('../method/common');
const intents = require('../constants/intents');

const InvocationHandler = {
    canHandle(handlerInput) {
        return common.checkRequestType(handlerInput, intents.INVOCATION);
    },
    handle(handlerInput) {
        return common.speak(handlerInput, "SPEECH");
    },
};

module.exports = InvocationHandler;
