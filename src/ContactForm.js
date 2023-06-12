const ContactForm = () => {

    return (  
        <form name="contact" method="POST" onSubmit="submit" netlify>
            <input type="hidden" name="form-name" value="contact" />
                <div className="WholeForm">
                    <div className="FormContents">
                        <div className="info">
                            <label>
                                name<br></br>
                                <input type="text" name="name" id=""/>
                            </label>
                            <label>
                                email address<br></br>
                                <input type="email" name="email" id=""/>
                            </label>
                        </div>
                        <div className="messagecontents">
                            <label>
                                title<br></br>
                                <input type="title" name="title" id="" />
                            </label>
                            <label>
                                message<br></br>    
                                <textarea name="message" id="" cols="30" rows="10"/>
                            </label>
                        </div>
                        <button type="submit" className="send">send<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 17V7l5 5l-5 5Z"/></svg></span></button>
                    </div>
                    </div>
        </form>
    );
}
 
export default ContactForm;