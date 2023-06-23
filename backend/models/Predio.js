import mongoose from "mongoose";

const predioSchema = mongoose.Schema({
  tipo: {
    type: String,
    required: true,
    trim: true,
  },
  frente: {
    type: Number,
    required: true,
    trim: true,
  },
  fondo: {
    type: Number,
    required: true,
    trim: true,
  },
  edad: {
    type: Number,
    trim: true,
  },
  area_terreno: {
    type: Number,    
    trim: true,
  },
  area_construida: {
    type: Number,    
    trim: true,
  },
  oferta: {
    type: Number,
    required: true,
    trim: true,
  },
  latitud: {
    type: Number,
    required: true,
    trim: true,
  },
  longitud: {
    type: Number,
    required: true,
    trim: true,
  },
  direccion: {
    type: String,
    default: null,
    trim: true,
  },
  contacto: {
    type: String,
    default: null,
    trim: true,
  },
  telefono: {
    type: String,
    default: null,
    trim: true,
  },
  web: {
    type: String,
    default: null,
  },
  
  fechaIngreso: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  veterinario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Veterinario",
  },
},
{
    timestamps: true,
  }
);
const Predio = mongoose.model("Predio", predioSchema);
export default Predio;