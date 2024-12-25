const CompanyAvatar = ({ icon }) => {
  return (
    <>
      <div className="companyAvatar rounded-circle d-flex align-items-center justify-content-center shadow-sm">
        {icon}
      </div>
    </>
  );
};

export default CompanyAvatar;
