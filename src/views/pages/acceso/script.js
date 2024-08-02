new Vue({
    el: '#app',
    data: {
        accion: paramas.accion,
        modelLogIn: {
            action: paramas.actionLogIn,
            inputs: [
                { name: 'name', type: "text", value: paramas.nombre, placeholder: 'Name', required: true },
                { name: 'password', type: "password", value: "", pass: false, placeholder: 'Password', required: true },
            ]
        },
        modelSignUp: {
            action: paramas.actionSignUp,
            inputs: [
                { name: 'name', type: "text", value: paramas.nombre, placeholder: 'Name', required: true },
                { name: 'email', type: "email", value: paramas.email, placeholder: 'Email', required: true },
                { name: 'password', type: "password", value: "", pass: false, placeholder: 'Password', required: true },
                { name: 'passwordConf', type: "password", value: "", pass: false, placeholder: 'Repeat Password', required: true },
            ]
        },
        model: {},
        isMoving: false,
        isReturning: false,
        isSubmitting: false,
        isSubmitted: false,
        isSubmittedFail: false,
    },
    created() {
        this.model = this.modelLogIn;
        if (this.accion === 'signUp') {
            this.switchSignUp();
        } else if (this.accion === 'logIn') {
            this.switchLogIn();
        }
        this.revision();
    },
    methods: {
        switchLogIn() {
            this.model = this.modelLogIn;
            document.querySelector('#SignUp').classList.add('modoAleternativo');
            document.querySelector('#LogIn').classList.remove('modoAleternativo');
            this.revision();
        },
        switchSignUp() {
            this.model = this.modelSignUp;
            document.querySelector('#LogIn').classList.add('modoAleternativo');
            document.querySelector('#SignUp').classList.remove('modoAleternativo');
            this.revision();
        },
        label(placeholder) {
            return placeholder + ':';
        },
        visibilidadPassword(index) {
            this.model.inputs[index].type = this.model.inputs[index].type === 'password' ? 'text' : 'password';
            this.model.inputs[index].pass = this.model.inputs[index].type === 'password' ? false : true;
        },
        validateForm() {
            return this.model.inputs.every(input => input.required ? input.value.trim() !== '' : true);
        },
        handleSubmit(event) {
            event.preventDefault();
            if (true) {
                this.isSubmitting = true;
                this.isMoving = true;
                setTimeout(() => {
                    this.isReturning = true;
                    this.isSubmitted = true;
                    setTimeout(() => {
                        this.isReturning = false;
                        this.isSubmitting = false;
                    }, 500);
                    this.isMoving = false;
                    event.target.submit();
                }, 700);
            } else {
                this.isSubmittedFail = true;
                setTimeout(() => this.isSubmittedFail = false, 2000);
            }
        },
        getFadeDelay(index) {
            return `${index * 0.2}s`;
        },
        revision() {
            for (const index in this.model.inputs) {
                this.requerido(index)

            }
        },
        requerido(index) {
            return this.model.inputs[index].required = (this.model.inputs[index].value === '') ? true : false;

        }
    },
});