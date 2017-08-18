export const nameFields = [
  { id: 'fname', type: 'text', label: 'First*', desc: '', required: true },
  { id: 'lname', type: 'text', label: 'Last*', desc: '', required: true }
]

export const contactFields = [
  { id: 'email', type: 'email', label: 'Email*', desc: '', required: true },
  { id: 'phone', type: 'tel', label: 'Phone', desc: 'Format (555) 123-4567', required: false }
]

export const provinceOptions = [
  { value: 'AB', label: 'Alberta' },
  { value: 'BC', label: 'British Columbia' },
  { value: 'MB', label: 'Manitoba' },
  { value: 'NB', label: 'New Brunswick' },
  { value: 'NL', label: 'Newfoundland and Labrador' },
  { value: 'NW', label: 'Northwest Territories' },
  { value: 'NS', label: 'Nova Scotia' },
  { value: 'NU', label: 'Nunavut' },
  { value: 'ON', label: 'Ontario' },
  { value: 'SK', label: 'Saskatchewan' },
  { value: 'QC', label: 'Quebec' },
  { value: 'YU', label: 'Yukon' }
]

export const residenceOptions = [
  { value: 'apartment', label: 'Apartment' },
  { value: 'condo', label: 'Condo' },
  { value: 'house', label: 'House' }
]

export const amenityOptions = [
  { value: 'pets', label: 'Pets Allowed' },
  { value: 'laundry', label: 'In-Suite Laundry' },
  { value: 'parking', label: 'Parking' },
  { value: 'balcony', label: 'Balcony' }
]

export const confirmLabel = 
  'Yes, I\'d love to get spammed with a bunch of marketing emails for months because of this form that I had complete forgotten about mere seconds after filling it out!'

export const monthOptions = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 
  'August', 'September', 'October', 'November', 'December'
]

let day = []
for (let d = 1; d <= 31; d++) day.push(d)
export const dayOptions = day

export const demoFields = {
  fname: '',
  lname: '',
  email: '',
  phone: '',
  city: '',
  province: '',
  residence: '',
  amenities: [],
  instructions: '',
  birthyear: 2017,
  birthmonth: 0,
  birthday: 1,
  confirm: false
}

export const demoErrors = {
  ...demoFields, 
  amenities: '',
  birthyear: '',
  birthmonth: '',
  birthday: '',
  confirm: ''
}