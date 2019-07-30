export default function validate(values) {
    let errors = {};
    if (!values.category) {
      errors.category = 'You must select category';
    }
    if (!values.pet_size) {
      errors.pet_size = 'You must select size for pet';
    }
    if (!values.price) {
      errors.price = 'You must input price';
    }
    if (!values.name) {
      errors.name = 'You must input Product Name';
    }
    return errors;
  };