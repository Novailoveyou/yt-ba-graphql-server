import mongoose from 'mongoose'

const Cat = mongoose.model('Cat', { name: String })

export default Cat
