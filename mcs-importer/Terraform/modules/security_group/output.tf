output "security_group_ids" {
	value = [aws_default_security_group.default_security_group.id]
}