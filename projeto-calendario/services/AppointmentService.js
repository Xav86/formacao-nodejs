const appointment = require('../models/Appointment');
const mongoose = require('mongoose');
const AppointmentFactory = require('../factories/AppointmentFactory.js');

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
            finished: false
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

}

module.exports = new AppointmentService;
