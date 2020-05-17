const [userName, setUserName] = useState("");
const trackUser = user => {setUserName(user => userName)};
const parentFunction=(data_from_child)=>{
  setUserName({userName});
}
return (
  <div id = "finance-root">
    <UserInputSection user={parentFunction}/>
  <div id="finance-data">
    <InputSection user={userName}/>
    <OutputSection />
  </div>
  </div>
);