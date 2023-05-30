import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0XFF024959),
      body: Center(
        child: Column(
          children: [
            const SizedBox(height: 50),
            Image.asset("assets/images/logo.png"),
            const SizedBox(
              height: 50,
            ),
            Container(
              height: 302.0,
              width: 336.0,
              decoration: const BoxDecoration(
                color: Color(0xffADD8E6),
                borderRadius: BorderRadius.all(
                  Radius.circular(20.0),
                ),
              ),
              child: Column(
                children: [
                  const Padding(
                    padding: EdgeInsets.symmetric(vertical: 15.0),
                    child: Text(
                      "Selecione o tipo de atendimento",
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 24.0,
                        fontWeight: FontWeight.w900,
                      ),
                    ),
                  ),
                  ElevatedButton(
                    onPressed: () {
                      Navigator.pushNamed(
                        context,
                        "/retirarExame",
                      );
                    },
                    style: ElevatedButton.styleFrom(
                      fixedSize: const Size(305, 52),
                      backgroundColor: const Color(0xFFFFFFFF),
                    ),
                    child: const Text(
                      "RETIRAR EXAME",
                      style: TextStyle(
                        color: Color(0xFF000000),
                        fontSize: 13,
                        fontWeight: FontWeight.w900,
                      ),
                    ),
                  ),
                  const SizedBox(
                    height: 15,
                  ),
                  ElevatedButton(
                    onPressed: () {
                      Navigator.pushNamed(
                        context,
                        "/atendimentoComum",
                      );
                    },
                    style: ElevatedButton.styleFrom(
                      fixedSize: const Size(305, 52),
                      backgroundColor: const Color(0xFF5FAE88),
                    ),
                    child: const Text(
                      "ATENDIMENTO COMUM",
                      style: TextStyle(
                        color: Color(0xFFFFFFFF),
                        fontSize: 13,
                        fontWeight: FontWeight.w900,
                      ),
                    ),
                  ),
                  const SizedBox(
                    height: 15,
                  ),
                  ElevatedButton(
                    onPressed: () {
                      Navigator.pushNamed(
                        context,
                        "/atendimentoPrioritario",
                      );
                    },
                    style: ElevatedButton.styleFrom(
                      fixedSize: const Size(305, 52),
                      backgroundColor: const Color(0xFF5FAE88),
                    ),
                    child: const Text(
                      "ATENDIMENTO PRIORITÁRIO",
                      style: TextStyle(
                        color: Color(0xFFFFFFFF),
                        fontSize: 13,
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
