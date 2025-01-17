import "./button.css"

export default function Button({ label, action }: { label: string; action: () => void }) {
    return (
        <button className="modern-button" onClick={action}>
            {label}
        </button>
    );
}