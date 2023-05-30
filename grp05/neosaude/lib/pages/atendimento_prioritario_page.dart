import 'package:flutter/material.dart';

class AtendimentoPrioritario extends StatelessWidget {
  const AtendimentoPrioritario({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xff024959),
      appBar: AppBar(
        elevation: 0,
        backgroundColor: const Color(0xff024959),
        leading: IconButton(
          icon: const Icon(
            Icons.arrow_back,
          ),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
      ),
      body: Center(
        child: Column(
          children: [
            const SizedBox(
              height: 35.0,
            ),
            Image.asset(
              "assets/images/logo.png",
            ),
            const SizedBox(
              height: 35.0,
            ),
            Container(
              width: 330.0,
              height: 350.0,
              decoration: const BoxDecoration(
                color: Color(0xffADD8E6),
                borderRadius: BorderRadius.all(
                  Radius.circular(
                    20.0,
                  ),
                ),
              ),
              child: const Column(
                children: [
                  Padding(
                    padding: EdgeInsets.symmetric(
                      vertical: 92.0,
                    ),
                    child: Text(
                      "Sua senha é (SP)",
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 32.0,
                        fontWeight: FontWeight.w900,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
