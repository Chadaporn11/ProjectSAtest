import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(2),
    },
    table: {
      minWidth: 650,
    },
    tableSpace: {
      marginTop: 20,
    },
  })
);

function Home() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container} maxWidth="md">
        <h1 style={{ textAlign: "center" }}>ระบบจัดการคนไข้นอก</h1>
        <p>Requirements</p>
        <p>
	      ระบบจัดการคนไข้นอกเป็นระบบจัดการผู้ป่วยที่ไม่ต้องนอนพักรักษาตัวในโรงพยาบาล หากแพทย์ต้องการนัดดูอาการผู้ป่วย 
        ระบบบันทึกรายการนัดหมายนั้น เป็นระบบที่ให้พยาบาลผู้ทำการนัดสามารถ login เข้าสู่ระบบ 
        โดยพยาบาลผู้ที่ login เข้าใช้งานระบบนี้สามารถบันทึกข้อมูลรายการนัดหมาย และ ออกใบนัด 
        เพื่อแจ้งให้ผู้ป่วยทราบวันและเวลาที่ทำการนัด แพทย์ที่ทำการรักษา ประเภทคลินิก  พยาบาลผู้ทำการนัด และ หมายเหตุในการนัดของผู้ป่วยได้ 
        และระบบจะบันทึกข้อมูลรายการนัดหมายลงในฐานข้อมูลโดยอัตโนมัติ
        </p>
      </Container>
    </div>
  );
}
export default Home;