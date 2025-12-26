type BookingButtonProps = {
  label?: string
  onClick?: () => void
}

export default function BookingButton({
  label = "Book Now",
  onClick,
}: BookingButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        px-6 py-3
        rounded-lg
        font-semibold
        text-white
        bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800
        hover:from-orange-400 hover:via-orange-500 hover:to-orange-700
        active:scale-95
        transition-all duration-300
        shadow-md hover:shadow-lg
      "
    >
      {label}
    </button>
  )
}
