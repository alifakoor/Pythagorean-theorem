from math import sqrt

D = "Which side are you looking for? "

# a**2 = b**2 + c**2


while type(D) == str:

	print(f"\n{D}")
	x = input("[a, b, c, exit]: ")

	#a
	if x.lower() == "a":
		f = input("give me (b) and (c): ")
		b, c = f.split(' ')
		a = sqrt((int(b)**2) + (int(c)**2))
		print("\nSide (a) is equal to %.2f" % (a))

	#b
	elif x.lower() == "b":
		f = input("give me (a) and (c): ")
		a, c = f.split(' ')
		b = sqrt((int(a)**2) + (int(c)**2))
		print("\nSide (b) is equal to %.2f" % (b))

	#c
	elif x.lower() == "c":
		f = input("give me (a) and (b): ")
		a, b = f.split(' ')
		c = sqrt((int(a)**2) - (int(b)**2))
		print("\nSide (b) is equal to %.2f" % (c))

	elif x.lower() == "exit":

		print("=======================================================================")

		s = input("Do you want to calculate again?[y, n]: ")
		if s.lower() == "y":
			continue
		else:
			break