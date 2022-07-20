const mongoose = require("mongoose");
const { toJSON, paginate } = require('./plugins');

const todoTaskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
},{
  timestamps: true
});
todoTaskSchema.plugin(toJSON);
todoTaskSchema.plugin(paginate);

module.exports = mongoose.model("TodoTask", todoTaskSchema);
