import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure  } from 'vee-validate';
import { required, min, max, alpha_spaces as alphaSpaces, confirmed, numeric, image, email } from '@vee-validate/rules'

export default {
    install(app){
        app.component('VeeForm', VeeForm);
        app.component('VeeField', VeeField);
        app.component('ErrorMessage', ErrorMessage);

        defineRule('required', required)
        defineRule('tos', required)
        defineRule('email', email)
        defineRule('min', min)
        defineRule('max', max)
        defineRule('alpha_spaces', alphaSpaces)
        defineRule('confirmed', confirmed)
        defineRule('numeric', numeric)
        defineRule('image', image)

        configure({
            generateMessage: (cxt) =>{
                const messages = {
                    required: `The field is required.`,
                    email: `The field must be an email address.`,
                    min: `The field ${cxt.field} is too short.`,
                    max: `The field ${cxt.field} is too long.`,
                    alpha_spaces: `The field ${cxt.field} may only contain alphabetical characters and space.`,
                    confirmed: `The passwords do not match.`,
                    tos: `You accept the terms of service.`,
                    numeric: `The ${cxt.field} must be a number.`,
                    image: `The file must be an image`
                };
                const message = messages[cxt.rule.name] ? messages[cxt.rule.name] : `The field ${cxt.field} is required.`;
                return message;
            },
            validateOnBlur: true,
            validateOnChange: true,
            validateOnInput: false,
            validateOnModelUpdate: true,
        })
    }
}