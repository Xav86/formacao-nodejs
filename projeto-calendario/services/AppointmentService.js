const appointment = require('../models/Appointment');
const mongoose = require('mongoose');
const AppointmentFactory = require('../factories/AppointmentFactory.js');
const mailer = require('nodemailer');

const Appo = mongoose.model('Appointment', appointment);

class AppointmentService {

    async create(name, email, description, cpf, date, time) {
        const newAppo = new Appo({
            name,
            email,
            description,
            cpf,
            date,
            time,
            finished: false,
            notified: false,
        });
        try {
            await newAppo.save();
            return true;
        } catch(error) {
            console.error(error);
            return false;
        }
    }

    async getAll(showFinished) {

        if (showFinished) {
            return await Appo.find();
        } else {
            const appos = await Appo.find({ 'finished': false });

            let appointments = []

            appos.forEach(appointment => {
                if (appointment.date) {
                    appointments.push( AppointmentFactory.build(appointment) );
                }

            });

            return appointments;
        }

    }

    async getById(id) {
        try {
            const event = await Appo.findOne({ '_id': id });
            return event;
        } catch(error) {
            console.error(error);
        }
    }

    async finish(id) {
        try {
            await Appo.findByIdAndUpdate(id, { finished: true });
            return true;
        } catch(error) {
            console.error(error);
            return false;
        }
    }

    async search(query) {
        try {
            const appos = await Appo.find().or([{ email: query }, { cpf: query }]);
            return appos;
        } catch(error) {
            console.error(error);
            return [];
        }
    }

    // daria pra configurar pra funcionar mas não tem necessidade

    // async sendNotification() {
    //     const appos = await this.getAll(false);

    //     const transporter = mailer.createTransport({
    //         host: 'smtp.mailtrap.io',
    //         port: 25,
    //         auth: {
    //             user: '3edb05efa41bb6',
    //             pass: 'f4d4d2222c6acd',
    //         },
    //     });

    //     appos.forEach(async app => {

    //         const date = app.start.getTime();
    //         const hour = 1000 * 60 * 60;
    //         const gap = date - Date.now();

    //         if (gap <= hour) {

    //             if (!app.notified) {

    //                 await Appo.findByIdAndUpdate(app.id, { notified: true });
                    
    //                 transporter.sendMail({
    //                     from: 'Teste Legal <teste@guia.com.br>',
    //                     to: app.email,
    //                     subject: 'Consulta em breve',
    //                     text: 'testeeeeee eeeeeee'
    //                 }).then(() => {

    //                 }).catch(error => {
    //                     console.error(error);
    //                 });

    //             }

    //         }

    //     });
    // }

}

module.exports = new AppointmentService;
