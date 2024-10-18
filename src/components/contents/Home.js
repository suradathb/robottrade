import React from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
// import THCharmonman  from '../../public/assets/webfonts/THCharmonman.ttf';

class Home extends React.Component {
  // async componentWillMount() {}

  constructor(props) {
    super(props);
    this.state = {
      location : "",
      startdate: "",
      idcard : "",
      grantorNumber : "",
      grantorHouseNo: "", // House No. ของผู้มอบอำนาจ
      grantorMooNo: "", // Moo No. ของผู้มอบอำนาจ
      grantorAlley: "", // Alley ของผู้มอบอำนาจ
      grantorRoad: "", // Road ของผู้มอบอำนาจ
      grantorSubdistrict: "", // Sub-district ของผู้มอบอำนาจ
      grantorDistrict: "", // District ของผู้มอบอำนาจ
      grantorProvince: "", // Province ของผู้มอบอำนาจ
      grantorPostalCode: "", // Postal Code ของผู้มอบอำนาจ
      grantorPhone: "", // Telephone ของผู้มอบอำนาจ

      granteeHouseNo: "", // House No. ของผู้รับมอบอำนาจ
      granteeMooNo: "", // Moo No. ของผู้รับมอบอำนาจ
      granteeAlley: "", // Alley ของผู้รับมอบอำนาจ
      granteeRoad: "", // Road ของผู้รับมอบอำนาจ
      granteeSubdistrict: "", // Sub-district ของผู้รับมอบอำนาจ
      granteeDistrict: "", // District ของผู้รับมอบอำนาจ
      granteeProvince: "", // Province ของผู้รับมอบอำนาจ
      granteePostalCode: "", // Postal Code ของผู้รับมอบอำนาจ
      granteePhone: "", // Telephone ของผู้รับมอบอำนาจ
      idCardNo: "", // ID Card No.
      issueDate: "", // Date/Month/Year of Issue
      expirationDate: "", // Date/Month/Year of Expiration
      representativeProcess: "", // To be my representative in the process
      responsibilityAcceptance: "", // I hereby accept responsibility as

      grantorSignature: "", // Signature of the attorney (ผู้มอบอำนาจ)
      granteeSignature: "", // Signature of the attorney (ผู้รับมอบอำนาจ)
      witnessSignature1: "", // Signature of the witness (พยาน)
      witnessSignature2: "", // Signature of the witness (พยาน)
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  convertFontToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result.split(",")[1]; // แยกข้อมูล Base64 ออกมา
        resolve(base64data);
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const fontFile = await fetch("./assets/webfonts/TH Sarabun New Regular.ttf") // เปลี่ยนเส้นทางให้ถูกต้อง
      .then((response) => response.blob());

    const base64Font = await this.convertFontToBase64(fontFile); // แปลงเป็น Base64
    // สร้างไฟล์ PDF โดยใช้ข้อมูลจากฟอร์ม
    const doc = new jsPDF();

    doc.addFileToVFS(
      "./assets/webfonts/TH Sarabun New Regular.ttf",
      base64Font
    );
    doc.addFont(
      "./assets/webfonts/TH Sarabun New Regular.ttf",
      "Sarabun",
      "normal"
    );
    doc.setFont("Sarabun");

    // ตั้งค่าการจัดรูปแบบ
    doc.setFontSize(16);
    doc.setTextColor(40); // กำหนดสีของข้อความ
    doc.setLineHeightFactor(1.5); // ระยะห่างระหว่างบรรทัด

    // เพิ่มกรอบ
    // doc.rect(10, 10, 190, 280); // กรอบทั้งหมด
    // doc.setTextColor(0); // สีข้อความ

    doc.text(95, 20, `หนังสือมอบอำนาจ`);
    doc.text(130, 30, `เขียนที่`);
    doc.text(130, 40, `วัน/เดือน/ปี`);
    doc.text(30, 60, `ข้าพเจ้า  ${this.state.grantorName}`);
    doc.text(100, 60, `บัตรประจำตัวประชาชนเลขที่ ${this.state.granteeName}`);

    doc.text(20, 70, `บ้านเลขที่ ${this.state.authorityDetails}`);
    doc.text(60, 70, `หมู่ที่ ${this.state.authorityDetails}`);
    doc.text(100, 70, `ซอย ${this.state.authorityDetails}`);
    doc.text(140, 70, `ถนน ${this.state.authorityDetails}`);

    doc.text(20, 80, `ตำบล/แขวง ${this.state.authorityDetails}`);
    doc.text(60, 80, `อำเภอ/เขต ${this.state.authorityDetails}`);
    doc.text(100, 80, `จังหวัด ${this.state.authorityDetails}`);
    doc.text(140, 80, `รหัสไปรษณีย์ ${this.state.authorityDetails}`);

    doc.text(20, 90, `โทรศัพย์ ${this.state.authorityDetails}`);

    doc.text(20, 100, `ขอมอบอำนาจให้ ${this.state.date}`);
    doc.text(80, 100, `วันเดือนปีเกิด ${this.state.date}`);
    doc.text(120, 100, `บ้านเลขที่ ${this.state.date}`);
    doc.text(160, 100, `หมู่ที่ ${this.state.date}`);

    doc.text(20, 110, `ซอย ${this.state.authorityDetails}`);
    doc.text(60, 110, `ถนน ${this.state.authorityDetails}`);
    doc.text(100, 110, `ตำบล/แขวง ${this.state.authorityDetails}`);
    doc.text(140, 110, `อำเภอ/เขต ${this.state.authorityDetails}`);

    doc.text(20, 120, `จังหวัด ${this.state.authorityDetails}`);
    doc.text(60, 120, `รหัสไปรษณีย์ ${this.state.authorityDetails}`);
    doc.text(100, 120, `โทรศัพย์ ${this.state.authorityDetails}`);
  
    doc.text(20, 130, `บัตรประจำตัวประชาชนเลขที่ ${this.state.authorityDetails}`);
    doc.text(20, 140, `วัน/เดือน/ปี-ที่ออกบัตร ${this.state.authorityDetails}`);
    doc.text(90, 140, `วัน/เดือน/ปี-ที่บัตรหมดอายุ ${this.state.authorityDetails}`);

    doc.text(20, 150, `เป็นผู้แทนของข้าพเจ้าในการดำเนินการ: ${this.state.place}`);

    doc.text(30, 170, `ข้าพเจ้าขอยอมรับผิดตามที่: ${this.state.place}`);
    doc.text(100, 170, `ผู้รับมอบอำนาจ: ${this.state.place}`);

    doc.text(20, 180, `ได้ดำเนินการไป โดยถือเสมือนว่าเป็นการกระทำของข้าพเจ้าทุกประการ`);
    doc.text(30, 190, `จึงลงลายมือชื่อไว้เป็นสำคัญ`);

    doc.text(20, 230, `ลงชื่อ ${this.state.grantorSignature} ผู้มอบอำนาจ`);
    doc.text(140, 230, `ลงชื่อ ${this.state.granteeSignature} ผู้รับมอบอำนาจ`);

    doc.text(25, 240, `( ${this.state.place} )`);
    doc.text(145, 240, `( ${this.state.place} )`);

    doc.text(20, 260, `ลงชื่อ ${this.state.witnessSignature1} พยาน`);
    doc.text(140, 260, `ลงชื่อ ${this.state.witnessSignature2} พยาน`);

    doc.text(25, 270, `( ${this.state.place} )`);
    doc.text(145, 270, `( ${this.state.place} )`);

    doc.save("หนังสือมอบอำนาจ.pdf");
  };
  render() {
    return (
      <>
        <div className="container-fluid bg-light py-5">
          <div className="col-md-6 m-auto text-center">
            <h1 className="h1">หนังสือมอบอำนาจ</h1>
            <div className="input-group mb-3 text-center">
              <p>{/* {this.state.acname} */}</p>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="form-group col-md-12">
              {/* <h1>หนังสือมอบอำนาจ</h1> */}
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="form-group col-md-8"></div>
                  <div className="form-group col-md-4">
                    <label>เขียนที่ :</label>
                    <input
                      type="text"
                      name="location"
                      className="form-control mt-1"
                      value={this.state.location}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-8"></div>
                  <div className="form-group col-md-4">
                    <label>วันที่ :</label>
                    <input
                      type="date"
                      name="startdate"
                      className="form-control mt-1"
                      value={this.state.startdate}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-2"></div>
                  <div className="form-group col-md-10">
                    <label>ข้าพเจ้า :</label>
                    <input
                      type="text"
                      name="grantorHouseNo"
                      className="form-control mt-1"
                      value={this.state.grantorHouseNo}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>บัตรประจำตัวประชาชนเลขที่ :</label>
                    <input
                      type="text"
                      name="idcard"
                      className="form-control mt-1"
                      value={this.state.idcard}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>บ้านเลขที่ :</label>
                    <input
                      type="text"
                      name="grantorNumber"
                      className="form-control mt-1"
                      value={this.state.grantorNumber}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <label>หมู่ที่ :</label>
                    <input
                      type="text"
                      name="grantorMooNo"
                      className="form-control mt-1"
                      value={this.state.grantorMooNo}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-8">
                    <label>ซอย :</label>
                    <input
                      type="text"
                      name="grantorAlley"
                      className="form-control mt-1"
                      value={this.state.grantorAlley}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>ถนน :</label>
                    <input
                      type="text"
                      name="grantorRoad"
                      className="form-control mt-1"
                      value={this.state.grantorRoad}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-8">
                    <label>ตำบล/แขวง :</label>
                    <input
                      type="text"
                      name="grantorSubdistrict"
                      className="form-control mt-1"
                      value={this.state.grantorSubdistrict}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>อำเภอ/เขต :</label>
                    <input
                      type="text"
                      name="grantorDistrict"
                      className="form-control mt-1"
                      value={this.state.grantorDistrict}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>จังหวัด :</label>
                    <input
                      type="text"
                      name="grantorProvince"
                      className="form-control mt-1"
                      value={this.state.grantorProvince}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <label>รหัสไปรษณีย์ :</label>
                    <input
                      type="text"
                      name="grantorPostalCode"
                      className="form-control mt-1"
                      value={this.state.grantorPostalCode}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>โทรศัพท์ :</label>
                    <input
                      type="text"
                      name="grantorPhone"
                      className="form-control mt-1"
                      value={this.state.grantorPhone}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {/* รายละเอียดผู้รับมอบอำนาจ */}
                <hr/>
                <div className="row">
                  <div className="form-group col-md-12">
                    <label>ขอมอบอำนาจให้ :</label>
                    <input
                      type="text"
                      name="location"
                      className="form-control mt-1"
                      value={this.state.location}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-4">
                    <label>วัน/เดือนปี/เกิด :</label>
                    <input
                      type="date"
                      name="location"
                      className="form-control mt-1"
                      value={this.state.location}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>บ้านเลขที่ :</label>
                    <input
                      type="text"
                      name="location"
                      className="form-control mt-1"
                      value={this.state.location}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>หมู่ที่ :</label>
                    <input
                      type="text"
                      name="location"
                      className="form-control mt-1"
                      value={this.state.location}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-8">
                    <label>ซอย :</label>
                    <input
                      type="text"
                      name="idcard"
                      className="form-control mt-1"
                      value={this.state.idcard}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>ถนน :</label>
                    <input
                      type="text"
                      name="ourself"
                      className="form-control mt-1"
                      value={this.state.ourself}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-8">
                    <label>ตำบล/แขวง :</label>
                    <input
                      type="text"
                      name="idcard"
                      className="form-control mt-1"
                      value={this.state.idcard}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>อำเภอ/เขต :</label>
                    <input
                      type="text"
                      name="ourself"
                      className="form-control mt-1"
                      value={this.state.ourself}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>จังหวัด :</label>
                    <input
                      type="text"
                      name="idcard"
                      className="form-control mt-1"
                      value={this.state.idcard}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <label>รหัสไปรษณีย์ :</label>
                    <input
                      type="text"
                      name="ourself"
                      className="form-control mt-1"
                      value={this.state.ourself}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>โทรศัพท์ :</label>
                    <input
                      type="text"
                      name="ourself"
                      className="form-control mt-1"
                      value={this.state.ourself}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-4">
                    <label>บัตรประจำตัวประชาชนเลขที่ :</label>
                    <input
                      type="text"
                      name="idcard"
                      className="form-control mt-1"
                      value={this.state.idcard}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>วัน/เดือน/ปี ที่ออกบัตร :</label>
                    <input
                      type="date"
                      name="idcard"
                      className="form-control mt-1"
                      value={this.state.idcard}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>วัน/เดือน/ปี ที่บัตรหมดอายุ :</label>
                    <input
                      type="date"
                      name="idcard"
                      className="form-control mt-1"
                      value={this.state.idcard}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {/* รายละเอียดผู้แทนมอบอำนาจ */}
                <div className="row">
                  <div className="form-group col-md-12">
                    <label>เป็นผู้แทนของข้าพเจ้า ในการดำเนินการ :</label>
                    <input
                      type="text"
                      name="idcard"
                      className="form-control mt-1"
                      value={this.state.idcard}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <p/>
                <div className="row">
                  <div className="form-group col-md-4">
                    <label>ข้าพเจ้าขอยอมรับผิดชอบตามที่</label>
                  </div>
                  <div className="form-group col-md-4">
                    <input
                      type="text"
                      name="idcard"
                      className="form-control mt-1"
                      value={this.state.idcard}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>ผู้รับมอบอำนาจ</label>
                  </div>
                </div>
                <p />
                <div className="row">
                  <div className="form-group col-md-12">
                    <label>
                      ได้ดำเนินการไป
                      โดยถือเสมือนว่าเป็นการกระทำของข้าพเจ้าเองทุกประการ
                      จึงลงลายมือชื่อไว้เป็นสำคัญ
                    </label>
                  </div>
                </div>
                <p />
                <hr/>
                {/* ลงชื่อผู้มอบอำนาจ */}
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>ลงชื่อผู้มอบอำนาจ :</label>
                    <input
                      type="text"
                      name="grantorSignature"
                      className="form-control mt-1"
                      value={this.state.grantorSignature}
                      onChange={this.handleChange}
                    />
                    <p />
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                    ></input>
                  </div>
                  <div className="form-group col-md-6">
                    <label>ลงชื่อผู้รับมอบอำนาจ :</label>
                    <input
                      type="text"
                      name="granteeSignature"
                      className="form-control mt-1"
                      value={this.state.granteeSignature}
                      onChange={this.handleChange}
                    />
                    <p />
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                    ></input>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>ลงชื่อพยาน :</label>
                    <input
                      type="text"
                      name="witnessSignature1"
                      className="form-control mt-1"
                      value={this.state.witnessSignature1}
                      onChange={this.handleChange}
                    />
                    <p />
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                    ></input>
                  </div>
                  <div className="form-group col-md-6">
                    <label>ลงชื่อพยาน :</label>
                    <input
                      type="text"
                      name="witnessSignature2"
                      className="form-control mt-1"
                      value={this.state.witnessSignature2}
                      onChange={this.handleChange}
                    />
                    <p />
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                    ></input>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col text-end mt-2">
                    <button
                      type="submit"
                      className="btn btn-success btn-lg px-3"
                    >
                      สร้างหนังสือมอบอำนาจ
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
