import useNewSubForm from "../hooks/useNewSubForm";
import { Sub } from "../types";

interface FormProps {
  onNewSub: (newSub: Sub) => void; // React.Dispatch<React.SetStateAction<Sub[]>>;
}

const Form = ({ onNewSub }: FormProps) => {
  // const [inputData, setInputData] = useState<FormState["inputData"]>(INITIAL_STATE);

  const [inputData, dispatch] = useNewSubForm();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNewSub(inputData);
    dispatch({ type: "CLEAR" });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    dispatch({
      type: "CHANGE_VALUE",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputData.nick}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          onChange={handleChange}
          value={inputData.subMonths}
          type="number"
          name="subMonths"
          placeholder="subMonths"
        />
        <input
          onChange={handleChange}
          value={inputData.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <textarea
          onChange={handleChange}
          value={inputData.description}
          name="description"
          placeholder="description"
        />

        <button type="button" onClick={handleClear}>
          Clear Form
        </button>
        <button type="submit">Save new subscriber!</button>
      </form>
    </div>
  );
};

export default Form;
