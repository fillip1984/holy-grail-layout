interface ModalProps {
  modalVisible: boolean;
  setModalVisible: (state: boolean) => void;
}
const Modal = ({ modalVisible, setModalVisible }: ModalProps) => {
  const handleOkClick = () => {
    setModalVisible(false);
  };

  const handleCancelClick = () => {
    setModalVisible(false);
  };

  return (
    <div
      id="modal-container"
      className={`pointer-events-none fixed top-0 right-0 bottom-0 left-0 z-[999] flex transform items-center justify-center duration-300  ${
        modalVisible ? "opacity-100" : "-scale-75 opacity-0"
      }`}>
      <div
        id="modal-content"
        className={`${
          modalVisible ? "pointer-events-auto" : "pointer-events-none"
        } flex h-1/3 w-3/4 flex-col rounded-lg bg-white p-4 shadow-lg`}>
        <div
          id="modal-header"
          className="flex items-center justify-between text-2xl">
          <span>Modal</span>
          <button onClick={() => setModalVisible(false)}>X</button>
        </div>
        <div id="modal-body" className="flex-1 p-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          optio commodi, quibusdam rerum minus cumque. Tempore eius dolorem
          itaque quo corporis, cumque veritatis et cupiditate repellat. Tempora
          eius quae iusto!
        </div>
        <div
          id="modal-footer"
          className="w-full border-0 border-t-2 border-gray-300 pt-4">
          <div className="flex justify-end gap-2">
            <button
              onClick={handleOkClick}
              className="rounded bg-gray-200 px-4 py-2">
              Ok
            </button>
            <button
              onClick={handleCancelClick}
              className="rounded border-2 border-gray-200 px-4 py-2">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
