import { Profile } from "./common/Profile";
import { Settings } from "./common/Settings";

export const AccounSetting = () => {
  return (
    <>
      <section className="account-settings">
        <Profile />
        <Settings />
      </section>
    </>
  );
};
