import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const inputDate = flatpickr("#datetime-picker")
const buttonStart = document.querySelector("button[data-start]")
const currentDate = new Date()
inputDate.textContent = currentDate
console.log(inputDate)