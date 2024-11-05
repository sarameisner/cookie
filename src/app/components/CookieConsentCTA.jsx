// CookieConsentCTA.jsx
const CookieConsentCTA = ({ onClick, ctatext }) => {
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
      onClick={onClick} // Tilføj onClick-funktionen her
    >
      {ctatext}
    </button>
  );
};

export default CookieConsentCTA;
