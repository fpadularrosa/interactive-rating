const Button = (number) => {
    return <button onClick={() => setItems(number)} className='w-12 h-12 pt-1 transition-all duration-150 bg-gray-700 rounded-full btn-number focus:text-white hover:text-white focus:bg-gray-400'>{number}</button>
};
export default Button;