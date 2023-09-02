package com.bank.shareaccount.global.util;

import javax.servlet.ReadListener;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import java.io.ByteArrayInputStream;
import java.nio.charset.StandardCharsets;

public class CustomHttpServletRequestWrapper extends HttpServletRequestWrapper {
    private final String requestBody;

    public CustomHttpServletRequestWrapper(HttpServletRequest request, String requestBody) {
        super(request);
        this.requestBody = requestBody;
    }

    @Override
    public ServletInputStream getInputStream() {
        byte[] bytes = requestBody.getBytes(StandardCharsets.UTF_8);
        ByteArrayInputStream inputStream = new ByteArrayInputStream(bytes);
        return new ServletInputStream() {
            @Override
            public boolean isFinished() {
                return false; // Modify as needed
            }

            @Override
            public boolean isReady() {
                return true; // Modify as needed
            }

            @Override
            public void setReadListener(ReadListener listener) {
                return;
            }


            @Override
            public int read() {
                return inputStream.read();
            }
        };
    }
}
