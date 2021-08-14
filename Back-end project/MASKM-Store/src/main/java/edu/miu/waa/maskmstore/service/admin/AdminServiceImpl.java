package edu.miu.waa.maskmstore.service.admin;

import edu.miu.waa.maskmstore.domain.Admin;
import edu.miu.waa.maskmstore.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService{
    @Autowired
    AdminRepository adminRepository;

    @Override
    public Admin getAdminProfile(String admin_userName) {
        return adminRepository.findAdminByUserName(admin_userName);
    }
}
