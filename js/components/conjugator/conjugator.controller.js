import moduleController from "../../core/modules/moduleController"
import {ELEMENT_MATCHER} from "../../core/constants/constants"
import Jeeves from "../../core/bot/jeeves"

export default class Conjugator extends moduleController {
    constructor() {
        super()

        // Methods
        this.conjugerAction()
    }

    conjugerAction() {
        this.whenMatch(`verb$conjuger :verb au :time`, (speak, $verbConjuger, $verb, $time) => {
            // Jeeves.reply('Quel verbe voulez-vous conjuger ?')
            debugger
            Jeeves.waitMyReply().then(...args => {
                debugger
            })
        })
    }

}