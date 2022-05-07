import Checkbox from './Checkbox';
import Digits from './Digits';
import Default from './Input';
import Password from './Password';
import Radio from './Radio';
import Search from './Search';

const Input = Object.assign(Default, {
  Password,
  Search,
  Digits,
  Checkbox,
  Radio,
});

export default Input;
