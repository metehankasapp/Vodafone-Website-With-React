import React from "react";
import Wrapper from "../../Components/Wrapper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SimplePopover from "../SimplePopover";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  filterTitle: {
    fontSize: "16px",
    fontFamily: "VodafoneFont, Sans-serif",
    color: "#999",
    width: "80px",
  },
  changerContainer: {
    padding: "20px",
    paddingLeft: "0",
  },
  changerContainerWborder: {
    padding: "20px",
    paddingLeft: "0",
    borderBottom: "2px solid rgba(0,0,0,.2)",
  },
  TagsUl: {
    display: "flex",
    flexDirection: "row",
    "&>li>button": {
      fontSize: "13px",
      backgroundColor: "#ddd",
      marginLeft: "15px",
      color: "black",
      borderRadius: "20px",
      fontWeight: 300,
    },
    "&>li>button:hover": {
      backgroundColor: "#ddd",
    },
  },
  packagesCard: {
    width: "340px",
  },
  packagesContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  packagesCardInner: {
    borderRadius: "0px",
  },
  PackageFirstAreaContainer: {
    background: "rgb(56,39,39)",
    background:
      "linear-gradient(90deg, rgba(56,39,39,1) 0%, rgba(170,23,0,1) 100%)",
  },
  packageName:{
    color:"white",
    fontSize:"16px",
    fontWeight:"300",
    fontFamily:"VodafoneFont, sans-serif",
    backgroundColor:"rgba(0,0,0,.2)",
    padding: "6px",
  },
  fsArea:{
      padding:"15px",
      paddingBottom:"30px",
      color:"#fff",
  },
  basicSubtitle:{
    fontSize:"13px",
    fontWeight:"100",
    
  },
  packagePrice:{
    fontSize:"45px",
    lineHeight:"12px",
    margin:"2rem 0",
    marginRight:"5px"
  }
}));

const Tags = [
  "26 Yaş Altına Özel",
  "Öne Çıkan",
  "Ekonomik",
  "Sana Özel",
  "Çok Satan",
  "Sınırsız",
];

const FilterContainer = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      <Grid container className={classes.changerContainerWborder}>
        <Grid item xs={8}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "baseline",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" className={classes.filterTitle}>
              Filtre
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <SimplePopover />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            asdasd
          </Box>
        </Grid>
      </Grid>
      <Grid container className={classes.changerContainer}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "baseline",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" className={classes.filterTitle}>
              Etiketler
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <ul className={classes.TagsUl}>
                {Tags.map((index, val) => (
                  <li key={val}>
                    <Button>{index}</Button>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container className={classes.packagesContainer}>
        {PackagesList.filter(
          (packageName) => packageName.priceThreeMonth > 55
        ).map((filteredPackage) => (
          <Grid key={filteredPackage.key} className={classes.packagesCard}>
            <Card className={classes.packagesCardInner}>
              <Box className={classes.PackageFirstAreaContainer}>
                <Box >
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.packageName}
                  >
                    {filteredPackage.packageName}
                  </Typography>
                </Box>
                <Box className={classes.fsArea}>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.basicSubtitle}
                  >
                    Online'a özel ilk 3 ay
                  </Typography>
                  <Box
                    fullWidth
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems:"end"
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      align="center"
                      className={classes.packagePrice}
                    >
                      ₺{filteredPackage.priceThreeMonth}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      align="center"
                      className={classes.basicSubtitle}
                    >
                      /ay
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.basicSubtitle}
                  >
                    Sonraki 9 ay ₺{filteredPackage.priceNineMonth} /ay
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.packageDetail}
                >
                  {filteredPackage.packageDetail}
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.packageDescription}
                >
                  {filteredPackage.packageDescription}
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.packageDetailSecond}
                >
                  {filteredPackage.packageDetailSecond}
                </Typography>

                <Box fullWidth sx={{ textAlign: "center" }}>
                  <Button>Detayları Göster</Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default FilterContainer;

const PackagesList = [
  {
    key: 1,
    packageName: "Red 20 GB",
    OnlineOzel: true,
    Sinirsiz: true,
    priceThreeMonth: 55,
    priceNineMonth: 64,
    packageDetail: "20 GB + SINIRSIZ",
    packageFree: ["Whatsapp", "Messenger"],
    packageDescription: "ilk ay 20 GB hediye!",
    packageDetailSecond: "1000 DK + 250 SMS",
    showDetails: [
      "Vodafonelular ve sabit hatlarla sınırsız konuşabilirsiniz.",
      "Yeni gelen Redlilere özel Sınırsız Tiktok paketi aylık 25TL yerine 15TL! Bu paket ile Tiktok uygulaması yönüne internet kullanımınız GB kotanızdan düşmez.",
      "Vodafone TV Red Paketi aylık 2GB interneti ile 12 ay boyunca hediye!",
      "Ücretsiz araç dezenfeksiyonundan Trendyol'da kargo indirimine kadar bir çok ayrıcalık Vodafone Yanımda'da!",
      "Taahhütsüz Aylık Tarife Ücreti: 94TL",
      "İlk ay geçerli 20 GB hediyen Vodafone Yanımda'da seni bekliyor!",
    ],
  },
  {
    key: 2,
    packageName: "Red 20 GB",
    OnlineOzel: true,
    Sinirsiz: true,
    priceThreeMonth: 100,
    priceNineMonth: 64,
    packageDetail: "20 GB + SINIRSIZ",
    packageFree: ["whatsapp", "messenger"],
    packageDescription: "ilk ay 20 GB hediye!",
    packageDetailSecond: "1000 DK + 250 SMS",
    showDetails: [
      "Vodafonelular ve sabit hatlarla sınırsız konuşabilirsiniz.",
      "Yeni gelen Redlilere özel Sınırsız Tiktok paketi aylık 25TL yerine 15TL! Bu paket ile Tiktok uygulaması yönüne internet kullanımınız GB kotanızdan düşmez.",
      "Vodafone TV Red Paketi aylık 2GB interneti ile 12 ay boyunca hediye!",
      "Ücretsiz araç dezenfeksiyonundan Trendyol'da kargo indirimine kadar bir çok ayrıcalık Vodafone Yanımda'da!",
      "Taahhütsüz Aylık Tarife Ücreti: 94TL",
      "İlk ay geçerli 20 GB hediyen Vodafone Yanımda'da seni bekliyor!",
    ],
  },
];
