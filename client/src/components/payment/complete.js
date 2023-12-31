import "./complete.css";
import { getCookie } from "../../useCookies";
import 완료 from "./../image/완료.png"

function Complete() {
  return (
    <div className='backGround'>
      <div className="completepage container">
        <div>
          <img src={완료}></img>
          <p className='completeMessage'>성공적으로 예약 되었습니다.</p>
          <p class="gotomain">
            <a href="/"> {">"} 메인화면으로 돌아가기</a>
          </p>
          {getCookie("login") ? (
            <p class="gotomain">
              <a href="/mypage"> {">"} 예약 내역 상세정보 확인하기</a>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Complete;
