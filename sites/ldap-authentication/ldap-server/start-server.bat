SET PORT=8010
SET LDAP_URL=LDAP://localhost/DC=vmiis,DC=local
SET	LDAP_baseDN=DC=vmiis,DC=local
SET LDAP_NAME_B=CN=
SET LDAP_NAME_E=,DC=vmiis,DC=local
SET LDAP_USERNAME=CN=jimmy,DC=vmiis,DC=local
SET LDAP_PASSWORD=123
node server.js
pause