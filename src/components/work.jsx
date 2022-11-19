import {
    AccountBalanceWallet, CurrencyRupee,
    Groups,
    LocalOffer,
} from "@mui/icons-material";
import { Grid } from "@mui/material";
import WorkInfo from "./WorkInfo";

const Work = (props) => {
  return (
    <Grid container spacing={2}>
      <WorkInfo
        heading="Invite your Friends"
        description="Share the link tutedude.com with
your friends"
        image={Groups}
      />

      <WorkInfo
        heading="Friend purchases any course"
        description="Using your REFERRAL CODE in the payments page"
        image={LocalOffer}
      />

      <WorkInfo
        heading="You get ₹ 200 as referral money"
        description="On total purchase the friend makes, into your wallet"
        image={CurrencyRupee}
      />

      <WorkInfo
        heading="Your Friend gets ₹ 200 Off "
        description="On his overall fee on successful purchase using your referral code "
        image={AccountBalanceWallet}
      />

      <WorkInfo
        heading="Transfer money from wallet"
        description="When the wallet balance reaches
₹200 or more, you can withdraw it"
        image={AccountBalanceWallet}
      />
    </Grid>
  );
};

export default Work;
