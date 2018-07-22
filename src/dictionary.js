export default {
  en: {
    messages: {
      required(field) {
        return `${field} must be entered`
      },
      min(field,args){
        return `${field} at least.. ${args[0]}`
      }
    },
    attributes: {
      name: 'Name',
      surname: 'Surname'
    }
  },
  th: {
    messages: {
      required(field) {
        return `ต้องป้อน ${field} นะ`
      },
      min(field,args){
        return `${field} ความยาว..${args[0]}`
      }
    },
    attributes: {
      name: 'ชื่อ',
      surname: 'นามสกุล'

    }
  }
}