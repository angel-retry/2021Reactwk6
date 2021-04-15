import FooterNavBar from "./FooterNavBar"

export default function Footer() {
    return (
        <footer className="footer">
            <hr className="hr-footer-line" />
            <FooterNavBar/>
            <p
                className="copyright">
                © 2018 塔吉特touched. All Rights Reserved..
            </p>
        </footer>           
    );
}