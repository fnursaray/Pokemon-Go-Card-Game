const RefreshButton = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <button
      style={{
        backgroundColor: "#b8235a",
        color: "white",
        padding: "10px 20px",
        borderRadius: "15px",
        border: "none",
        cursor: "pointer",
      }}
      onClick={handleRefresh}
    >
      Refresh
    </button>
  );
};
export default RefreshButton;
