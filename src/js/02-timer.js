import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const inputDate = flatpickr("#datetime-picker")
const buttonStart = document.querySelector("button[data-start]")
const day = document.querySelector('span[data-days]')
const hour = document.querySelector('span[data-hours]')
const minute = document.querySelector('span[data-minutes]')
const second = document.querySelector('span[data-seconds]')
//const currentDate = new Date()
//inputDate.textContent = currentDate
//console.log(inputDate)
buttonStart.disabled = true