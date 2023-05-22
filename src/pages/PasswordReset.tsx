import { FunctionComponent, useState } from "react";
import '../index.css';

type ChangePasswordProps = {};

const ChangePassword: FunctionComponent<ChangePasswordProps> = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const validatePassword = (pass: string) => {
        if (pass.length < 8 || !/[~`!#$%\^&*+=\-\[\]\\';,@/{}|\\":<>\?]/g.test(pass)) {
            setPasswordError("비밀번호를 최소 8자 이상, 특수문자 1개를 포함해주세요");
            return false;
        } else {
            setPasswordError("");
            return true;
        }
    };

    const validateConfirmPassword = (pass: string, confirmPass: string) => {
        if (pass !== confirmPass) {
            setConfirmPasswordError("비밀번호가 일치하지 않아요");
            return false;
        } else {
            setConfirmPasswordError("");
            return true;
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (validatePassword(password) && validateConfirmPassword(password, confirmPassword)) {
            alert("통과되었습니다.");
            setPasswordError("");
            setConfirmPasswordError("");
        }
    };

    return (
        <div className="change-password">
            {/* 뒤로가기 버튼 */}
            <div
                className="back-button"
                onClick={() => window.history.back()}
                aria-label="뒤로가기"
                role="button"
                tabIndex={0}
            >
                &lt;
            </div>
            {/* 비밀번호 변경 */}
            <div className="title">비밀번호 변경</div>
            <form className="password-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="password"
                        name="password"
                        placeholder="새로운 비밀번호"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        onBlur={e => validatePassword(e.target.value)}
                        className="password-input"
                    />
                    {passwordError && <div className="error-message">{passwordError}</div>}
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="비밀번호 재입력"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        onBlur={e => validateConfirmPassword(password, e.target.value)}
                        className="confirm-password-input"
                    />
                    {confirmPasswordError && <div className="error-message">{confirmPasswordError}</div>}
                </div>
                <button className="submit-button" type="submit">변경하기</button>
            </form>
        </div>
    );
};

export default ChangePassword;
