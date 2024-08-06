// src/constants/content.js
import foodHome from "../assets/ui-images/food-ui/food-home.png";
import foodDetail from "../assets/ui-images/food-ui/food-detail.png";

import quizWelcome from "../assets/ui-images/quiz-ui/welcome-screen.png";
import quizScore from "../assets/ui-images/quiz-ui/score-screen.png";
import quizScreen from "../assets/ui-images/quiz-ui/quiz-screen.png";

import covidDashboard from "../assets/ui-images/covid-ui/dashboard.png";
import covidInfo from "../assets/ui-images/covid-ui/info.png"

// food ui

export const contentDataFood = [
  {
    id: "healthy-food-home",
    title: "Dashboard Screen",
    image: foodHome,
    descriptionText: "lorem ispum",
    code: `
     import 'package:flutter/material.dart';
import 'package:fyp/templates/healthy_food_template/detail_scree.dart';
import 'package:simple_circular_progress_bar/simple_circular_progress_bar.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    return Scaffold(
      body: SafeArea(
        child: Container(
          height: height,
          width: width,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                Color(0xff2f3949),
                Color(0xff131923),
              ],
            ),
          ),
          child: Padding(
            padding: const EdgeInsets.all(20),
            child: SingleChildScrollView(
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Hello Jennifer",
                        style: Theme.of(context)
                            .textTheme
                            .headlineMedium!
                            .copyWith(
                              color: const Color(0xfffbfbfe),
                              fontWeight: FontWeight.bold,
                            ),
                      ),
                      const CircleAvatar(
                        radius: 25,
                        backgroundImage: AssetImage('assets/jennifer.jpg'),
                      ),
                    ],
                  ),
                  const SizedBox(height: 40),
                  const AnimatedProgressBar(),
                  const SizedBox(height: 40),
                  PopularCard(
                    height: 210,
                    width: width,
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class AnimatedProgressBar extends StatelessWidget {
  const AnimatedProgressBar({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          decoration: const BoxDecoration(
            color: Color.fromARGB(255, 87, 92, 100),
            borderRadius: BorderRadius.all(
              Radius.circular(250),
            ),
          ),
          child: Stack(
            children: [
              SimpleCircularProgressBar(
                size: 250,
                maxValue: 1000,
                backStrokeWidth: 4,
                backColor: const Color(0xff414958),
                progressColors: const [
                  Color(0xfffe6622),
                  Color(0xffffd411),
                ],
                animationDuration: 2,
                valueNotifier: ValueNotifier(617),
                onGetText: (double value) {
                  return Text(
                    style: const TextStyle(
                      fontSize: 30,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  );
                },
              ),
              Positioned(
                top: 43,
                left: 96,
                child: Image.asset("assets/energy.png"),
              ),
              Positioned(
                top: 150,
                left: 75,
                child: Text(
                  "REMAINING",
                  style: Theme.of(context).textTheme.titleMedium!.copyWith(
                        color: const Color(0xff59606e),
                        letterSpacing: 2.5,
                      ),
                ),
              )
            ],
          ),
        ),
        const SizedBox(height: 60),
        const Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            TextWidget(
              title: "1383",
              subTitle: "CONSUMED",
            ),
            TextWidget(
              title: "471",
              subTitle: "BURNED",
            ),
            TextWidget(
              title: "912",
              subTitle: "NET",
            ),
          ],
        ),
      ],
    );
  }
}

class TextWidget extends StatelessWidget {
  final String title;
  final String subTitle;
  const TextWidget({
    super.key,
    required this.title,
    required this.subTitle,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          title,
          style: Theme.of(context).textTheme.headlineSmall!.copyWith(
                color: Colors.white,
                fontWeight: FontWeight.bold,
              ),
        ),
        const SizedBox(height: 6.666),
        Text(
          subTitle,
          style: Theme.of(context).textTheme.titleSmall!.copyWith(
                color: const Color(0xff59606e),
              ),
        ),
      ],
    );
  }
}

class PopularCard extends StatelessWidget {
  const PopularCard({
    super.key,
    required this.height,
    required this.width,
  });

  final double height;
  final double width;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Divider(
          color: Color(0xff313a48),
        ),
        const SizedBox(height: 20),
        Text(
          "Popular",
          style: Theme.of(context).textTheme.headlineMedium!.copyWith(
                color: Colors.white,
              ),
        ),
        const SizedBox(height: 20),
        CardData(
          height: height,
          width: width,
          image: "assets/chicken.png",
          text: "Chicken & spring green bun cha",
        ),
      ],
    );
  }
}

class CardData extends StatelessWidget {
  const CardData({
    super.key,
    required this.height,
    required this.width,
    required this.image,
    required this.text,
  });

  final double height;
  final double width;
  final String image;
  final String text;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => DetailScreen(image: image, text: text),
          ),
        );
      },
      child: Container(
        height: height,
        width: width,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(25),
          gradient: const LinearGradient(
            colors: [
              Color(0xff2f3949),
              Color(0xff131923),
            ],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Hero(
              tag: "image",
              child: Image.asset(
                image,
                scale: 2.5,
                fit: BoxFit.cover,
              ),
            ),
            Text(
              text,
              style: Theme.of(context).textTheme.titleLarge!.copyWith(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
            ),
          ],
        ),
      ),
    );
  }
}
    `,
  },

  {
    id: "healthy-food-dashboard",
    title: "Detail Screen",
    image: foodDetail,
    descriptionText: "lorem ispum",

    code: `
    import 'package:flutter/material.dart';
import 'package:fyp/templates/healthy_food_template/detail_scree.dart';
import 'package:simple_circular_progress_bar/simple_circular_progress_bar.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    return Scaffold(
      body: SafeArea(
        child: Container(
          height: height,
          width: width,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                Color(0xff2f3949),
                Color(0xff131923),
              ],
            ),
          ),
          child: Padding(
            padding: const EdgeInsets.all(20),
            child: SingleChildScrollView(
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Hello Jennifer",
                        style: Theme.of(context)
                            .textTheme
                            .headlineMedium!
                            .copyWith(
                              color: const Color(0xfffbfbfe),
                              fontWeight: FontWeight.bold,
                            ),
                      ),
                      const CircleAvatar(
                        radius: 25,
                        backgroundImage: AssetImage('assets/jennifer.jpg'),
                      ),
                    ],
                  ),
                  const SizedBox(height: 40),
                  const AnimatedProgressBar(),
                  const SizedBox(height: 40),
                  PopularCard(
                    height: 210,
                    width: width,
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class AnimatedProgressBar extends StatelessWidget {
  const AnimatedProgressBar({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          decoration: const BoxDecoration(
            color: Color.fromARGB(255, 87, 92, 100),
            borderRadius: BorderRadius.all(
              Radius.circular(250),
            ),
          ),
          child: Stack(
            children: [
              SimpleCircularProgressBar(
                size: 250,
                maxValue: 1000,
                backStrokeWidth: 4,
                backColor: const Color(0xff414958),
                progressColors: const [
                  Color(0xfffe6622),
                  Color(0xffffd411),
                ],
                animationDuration: 2,
                valueNotifier: ValueNotifier(617),
                onGetText: (double value) {
                  return Text(
                    {(value).toInt()},
                    style: const TextStyle(
                      fontSize: 30,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  );
                },
              ),
              Positioned(
                top: 43,
                left: 96,
                child: Image.asset("assets/energy.png"),
              ),
              Positioned(
                top: 150,
                left: 75,
                child: Text(
                  "REMAINING",
                  style: Theme.of(context).textTheme.titleMedium!.copyWith(
                        color: const Color(0xff59606e),
                        letterSpacing: 2.5,
                      ),
                ),
              )
            ],
          ),
        ),
        const SizedBox(height: 60),
        const Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            TextWidget(
              title: "1383",
              subTitle: "CONSUMED",
            ),
            TextWidget(
              title: "471",
              subTitle: "BURNED",
            ),
            TextWidget(
              title: "912",
              subTitle: "NET",
            ),
          ],
        ),
      ],
    );
  }
}

class TextWidget extends StatelessWidget {
  final String title;
  final String subTitle;
  const TextWidget({
    super.key,
    required this.title,
    required this.subTitle,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          title,
          style: Theme.of(context).textTheme.headlineSmall!.copyWith(
                color: Colors.white,
                fontWeight: FontWeight.bold,
              ),
        ),
        const SizedBox(height: 6.666),
        Text(
          subTitle,
          style: Theme.of(context).textTheme.titleSmall!.copyWith(
                color: const Color(0xff59606e),
              ),
        ),
      ],
    );
  }
}

class PopularCard extends StatelessWidget {
  const PopularCard({
    super.key,
    required this.height,
    required this.width,
  });

  final double height;
  final double width;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Divider(
          color: Color(0xff313a48),
        ),
        const SizedBox(height: 20),
        Text(
          "Popular",
          style: Theme.of(context).textTheme.headlineMedium!.copyWith(
                color: Colors.white,
              ),
        ),
        const SizedBox(height: 20),
        CardData(
          height: height,
          width: width,
          image: "assets/chicken.png",
          text: "Chicken & spring green bun cha",
        ),
      ],
    );
  }
}

class CardData extends StatelessWidget {
  const CardData({
    super.key,
    required this.height,
    required this.width,
    required this.image,
    required this.text,
  });

  final double height;
  final double width;
  final String image;
  final String text;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => DetailScreen(image: image, text: text),
          ),
        );
      },
      child: Container(
        height: height,
        width: width,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(25),
          gradient: const LinearGradient(
            colors: [
              Color(0xff2f3949),
              Color(0xff131923),
            ],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Hero(
              tag: "image",
              child: Image.asset(
                image,
                scale: 2.5,
                fit: BoxFit.cover,
              ),
            ),
            Text(
              text,
              style: Theme.of(context).textTheme.titleLarge!.copyWith(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
            ),
          ],
        ),
      ),
    );
  }
}`,
  },
  // Add more objects for additional content, each with a unique id
];


// quiz ui need to change flutter code
export const contentDataQuiz = [
  {
    id: "welcome-screen",
    title: "Welcome Screen",
    image: quizWelcome,
    code: `
     import 'package:flutter/material.dart';
import 'package:fyp/templates/healthy_food_template/detail_scree.dart';
import 'package:simple_circular_progress_bar/simple_circular_progress_bar.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    return Scaffold(
      body: SafeArea(
        child: Container(
          height: height,
          width: width,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                Color(0xff2f3949),
                Color(0xff131923),
              ],
            ),
          ),
          child: Padding(
            padding: const EdgeInsets.all(20),
            child: SingleChildScrollView(
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Hello Jennifer",
                        style: Theme.of(context)
                            .textTheme
                            .headlineMedium!
                            .copyWith(
                              color: const Color(0xfffbfbfe),
                              fontWeight: FontWeight.bold,
                            ),
                      ),
                      const CircleAvatar(
                        radius: 25,
                        backgroundImage: AssetImage('assets/jennifer.jpg'),
                      ),
                    ],
                  ),
                  const SizedBox(height: 40),
                  const AnimatedProgressBar(),
                  const SizedBox(height: 40),
                  PopularCard(
                    height: 210,
                    width: width,
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class AnimatedProgressBar extends StatelessWidget {
  const AnimatedProgressBar({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          decoration: const BoxDecoration(
            color: Color.fromARGB(255, 87, 92, 100),
            borderRadius: BorderRadius.all(
              Radius.circular(250),
            ),
          ),
          child: Stack(
            children: [
              SimpleCircularProgressBar(
                size: 250,
                maxValue: 1000,
                backStrokeWidth: 4,
                backColor: const Color(0xff414958),
                progressColors: const [
                  Color(0xfffe6622),
                  Color(0xffffd411),
                ],
                animationDuration: 2,
                valueNotifier: ValueNotifier(617),
                onGetText: (double value) {
                  return Text(
                    style: const TextStyle(
                      fontSize: 30,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  );
                },
              ),
              Positioned(
                top: 43,
                left: 96,
                child: Image.asset("assets/energy.png"),
              ),
              Positioned(
                top: 150,
                left: 75,
                child: Text(
                  "REMAINING",
                  style: Theme.of(context).textTheme.titleMedium!.copyWith(
                        color: const Color(0xff59606e),
                        letterSpacing: 2.5,
                      ),
                ),
              )
            ],
          ),
        ),
        const SizedBox(height: 60),
        const Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            TextWidget(
              title: "1383",
              subTitle: "CONSUMED",
            ),
            TextWidget(
              title: "471",
              subTitle: "BURNED",
            ),
            TextWidget(
              title: "912",
              subTitle: "NET",
            ),
          ],
        ),
      ],
    );
  }
}

class TextWidget extends StatelessWidget {
  final String title;
  final String subTitle;
  const TextWidget({
    super.key,
    required this.title,
    required this.subTitle,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          title,
          style: Theme.of(context).textTheme.headlineSmall!.copyWith(
                color: Colors.white,
                fontWeight: FontWeight.bold,
              ),
        ),
        const SizedBox(height: 6.666),
        Text(
          subTitle,
          style: Theme.of(context).textTheme.titleSmall!.copyWith(
                color: const Color(0xff59606e),
              ),
        ),
      ],
    );
  }
}

class PopularCard extends StatelessWidget {
  const PopularCard({
    super.key,
    required this.height,
    required this.width,
  });

  final double height;
  final double width;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Divider(
          color: Color(0xff313a48),
        ),
        const SizedBox(height: 20),
        Text(
          "Popular",
          style: Theme.of(context).textTheme.headlineMedium!.copyWith(
                color: Colors.white,
              ),
        ),
        const SizedBox(height: 20),
        CardData(
          height: height,
          width: width,
          image: "assets/chicken.png",
          text: "Chicken & spring green bun cha",
        ),
      ],
    );
  }
}

class CardData extends StatelessWidget {
  const CardData({
    super.key,
    required this.height,
    required this.width,
    required this.image,
    required this.text,
  });

  final double height;
  final double width;
  final String image;
  final String text;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => DetailScreen(image: image, text: text),
          ),
        );
      },
      child: Container(
        height: height,
        width: width,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(25),
          gradient: const LinearGradient(
            colors: [
              Color(0xff2f3949),
              Color(0xff131923),
            ],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Hero(
              tag: "image",
              child: Image.asset(
                image,
                scale: 2.5,
                fit: BoxFit.cover,
              ),
            ),
            Text(
              text,
              style: Theme.of(context).textTheme.titleLarge!.copyWith(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
            ),
          ],
        ),
      ),
    );
  }
}
    `,
  },

  {
    id: "quiz-screen",
    title: "Quiz Screen",
    image: quizScreen,
    code: `
    import 'package:flutter/material.dart';
import 'package:fyp/templates/healthy_food_template/detail_scree.dart';
import 'package:simple_circular_progress_bar/simple_circular_progress_bar.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    return Scaffold(
      body: SafeArea(
        child: Container(
          height: height,
          width: width,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                Color(0xff2f3949),
                Color(0xff131923),
              ],
            ),
          ),
          child: Padding(
            padding: const EdgeInsets.all(20),
            child: SingleChildScrollView(
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Hello Jennifer",
                        style: Theme.of(context)
                            .textTheme
                            .headlineMedium!
                            .copyWith(
                              color: const Color(0xfffbfbfe),
                              fontWeight: FontWeight.bold,
                            ),
                      ),
                      const CircleAvatar(
                        radius: 25,
                        backgroundImage: AssetImage('assets/jennifer.jpg'),
                      ),
                    ],
                  ),
                  const SizedBox(height: 40),
                  const AnimatedProgressBar(),
                  const SizedBox(height: 40),
                  PopularCard(
                    height: 210,
                    width: width,
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class AnimatedProgressBar extends StatelessWidget {
  const AnimatedProgressBar({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          decoration: const BoxDecoration(
            color: Color.fromARGB(255, 87, 92, 100),
            borderRadius: BorderRadius.all(
              Radius.circular(250),
            ),
          ),
          child: Stack(
            children: [
              SimpleCircularProgressBar(
                size: 250,
                maxValue: 1000,
                backStrokeWidth: 4,
                backColor: const Color(0xff414958),
                progressColors: const [
                  Color(0xfffe6622),
                  Color(0xffffd411),
                ],
                animationDuration: 2,
                valueNotifier: ValueNotifier(617),
                onGetText: (double value) {
                  return Text(
                    {(value).toInt()},
                    style: const TextStyle(
                      fontSize: 30,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  );
                },
              ),
              Positioned(
                top: 43,
                left: 96,
                child: Image.asset("assets/energy.png"),
              ),
              Positioned(
                top: 150,
                left: 75,
                child: Text(
                  "REMAINING",
                  style: Theme.of(context).textTheme.titleMedium!.copyWith(
                        color: const Color(0xff59606e),
                        letterSpacing: 2.5,
                      ),
                ),
              )
            ],
          ),
        ),
        const SizedBox(height: 60),
        const Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            TextWidget(
              title: "1383",
              subTitle: "CONSUMED",
            ),
            TextWidget(
              title: "471",
              subTitle: "BURNED",
            ),
            TextWidget(
              title: "912",
              subTitle: "NET",
            ),
          ],
        ),
      ],
    );
  }
}

class TextWidget extends StatelessWidget {
  final String title;
  final String subTitle;
  const TextWidget({
    super.key,
    required this.title,
    required this.subTitle,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          title,
          style: Theme.of(context).textTheme.headlineSmall!.copyWith(
                color: Colors.white,
                fontWeight: FontWeight.bold,
              ),
        ),
        const SizedBox(height: 6.666),
        Text(
          subTitle,
          style: Theme.of(context).textTheme.titleSmall!.copyWith(
                color: const Color(0xff59606e),
              ),
        ),
      ],
    );
  }
}

class PopularCard extends StatelessWidget {
  const PopularCard({
    super.key,
    required this.height,
    required this.width,
  });

  final double height;
  final double width;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Divider(
          color: Color(0xff313a48),
        ),
        const SizedBox(height: 20),
        Text(
          "Popular",
          style: Theme.of(context).textTheme.headlineMedium!.copyWith(
                color: Colors.white,
              ),
        ),
        const SizedBox(height: 20),
        CardData(
          height: height,
          width: width,
          image: "assets/chicken.png",
          text: "Chicken & spring green bun cha",
        ),
      ],
    );
  }
}

class CardData extends StatelessWidget {
  const CardData({
    super.key,
    required this.height,
    required this.width,
    required this.image,
    required this.text,
  });

  final double height;
  final double width;
  final String image;
  final String text;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => DetailScreen(image: image, text: text),
          ),
        );
      },
      child: Container(
        height: height,
        width: width,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(25),
          gradient: const LinearGradient(
            colors: [
              Color(0xff2f3949),
              Color(0xff131923),
            ],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Hero(
              tag: "image",
              child: Image.asset(
                image,
                scale: 2.5,
                fit: BoxFit.cover,
              ),
            ),
            Text(
              text,
              style: Theme.of(context).textTheme.titleLarge!.copyWith(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
            ),
          ],
        ),
      ),
    );
  }
}`,
  },
  {
    id: "qiz-score",
    title: "Quiz Score",
    image: quizScore,
    code: `
    import 'package:flutter/material.dart';
import 'package:fyp/templates/healthy_food_template/detail_scree.dart';
import 'package:simple_circular_progress_bar/simple_circular_progress_bar.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    return Scaffold(
      body: SafeArea(
        child: Container(
          height: height,
          width: width,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                Color(0xff2f3949),
                Color(0xff131923),
              ],
            ),
          ),
          child: Padding(
            padding: const EdgeInsets.all(20),
            child: SingleChildScrollView(
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Hello Jennifer",
                        style: Theme.of(context)
                            .textTheme
                            .headlineMedium!
                            .copyWith(
                              color: const Color(0xfffbfbfe),
                              fontWeight: FontWeight.bold,
                            ),
                      ),
                      const CircleAvatar(
                        radius: 25,
                        backgroundImage: AssetImage('assets/jennifer.jpg'),
                      ),
                    ],
                  ),
                  const SizedBox(height: 40),
                  const AnimatedProgressBar(),
                  const SizedBox(height: 40),
                  PopularCard(
                    height: 210,
                    width: width,
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class AnimatedProgressBar extends StatelessWidget {
  const AnimatedProgressBar({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          decoration: const BoxDecoration(
            color: Color.fromARGB(255, 87, 92, 100),
            borderRadius: BorderRadius.all(
              Radius.circular(250),
            ),
          ),
          child: Stack(
            children: [
              SimpleCircularProgressBar(
                size: 250,
                maxValue: 1000,
                backStrokeWidth: 4,
                backColor: const Color(0xff414958),
                progressColors: const [
                  Color(0xfffe6622),
                  Color(0xffffd411),
                ],
                animationDuration: 2,
                valueNotifier: ValueNotifier(617),
                onGetText: (double value) {
                  return Text(
                    {(value).toInt()},
                    style: const TextStyle(
                      fontSize: 30,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  );
                },
              ),
              Positioned(
                top: 43,
                left: 96,
                child: Image.asset("assets/energy.png"),
              ),
              Positioned(
                top: 150,
                left: 75,
                child: Text(
                  "REMAINING",
                  style: Theme.of(context).textTheme.titleMedium!.copyWith(
                        color: const Color(0xff59606e),
                        letterSpacing: 2.5,
                      ),
                ),
              )
            ],
          ),
        ),
        const SizedBox(height: 60),
        const Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            TextWidget(
              title: "1383",
              subTitle: "CONSUMED",
            ),
            TextWidget(
              title: "471",
              subTitle: "BURNED",
            ),
            TextWidget(
              title: "912",
              subTitle: "NET",
            ),
          ],
        ),
      ],
    );
  }
}

class TextWidget extends StatelessWidget {
  final String title;
  final String subTitle;
  const TextWidget({
    super.key,
    required this.title,
    required this.subTitle,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          title,
          style: Theme.of(context).textTheme.headlineSmall!.copyWith(
                color: Colors.white,
                fontWeight: FontWeight.bold,
              ),
        ),
        const SizedBox(height: 6.666),
        Text(
          subTitle,
          style: Theme.of(context).textTheme.titleSmall!.copyWith(
                color: const Color(0xff59606e),
              ),
        ),
      ],
    );
  }
}

class PopularCard extends StatelessWidget {
  const PopularCard({
    super.key,
    required this.height,
    required this.width,
  });

  final double height;
  final double width;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Divider(
          color: Color(0xff313a48),
        ),
        const SizedBox(height: 20),
        Text(
          "Popular",
          style: Theme.of(context).textTheme.headlineMedium!.copyWith(
                color: Colors.white,
              ),
        ),
        const SizedBox(height: 20),
        CardData(
          height: height,
          width: width,
          image: "assets/chicken.png",
          text: "Chicken & spring green bun cha",
        ),
      ],
    );
  }
}

class CardData extends StatelessWidget {
  const CardData({
    super.key,
    required this.height,
    required this.width,
    required this.image,
    required this.text,
  });

  final double height;
  final double width;
  final String image;
  final String text;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => DetailScreen(image: image, text: text),
          ),
        );
      },
      child: Container(
        height: height,
        width: width,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(25),
          gradient: const LinearGradient(
            colors: [
              Color(0xff2f3949),
              Color(0xff131923),
            ],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Hero(
              tag: "image",
              child: Image.asset(
                image,
                scale: 2.5,
                fit: BoxFit.cover,
              ),
            ),
            Text(
              text,
              style: Theme.of(context).textTheme.titleLarge!.copyWith(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
            ),
          ],
        ),
      ),
    );
  }
}`,
  },
  // Add more objects for additional content, each with a unique id
];


// covid ui
export const contentDataCovid = [
  {
    id: "dashboard-screen",
    title: "Dashboard Screen",
    image: covidDashboard,
    code: `
     import 'package:flutter/material.dart';
import 'package:fyp/templates/healthy_food_template/detail_scree.dart';
import 'package:simple_circular_progress_bar/simple_circular_progress_bar.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    return Scaffold(
      body: SafeArea(
        child: Container(
          height: height,
          width: width,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                Color(0xff2f3949),
                Color(0xff131923),
              ],
            ),
          ),
          child: Padding(
            padding: const EdgeInsets.all(20),
            child: SingleChildScrollView(
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Hello Jennifer",
                        style: Theme.of(context)
                            .textTheme
                            .headlineMedium!
                            .copyWith(
                              color: const Color(0xfffbfbfe),
                              fontWeight: FontWeight.bold,
                            ),
                      ),
                      const CircleAvatar(
                        radius: 25,
                        backgroundImage: AssetImage('assets/jennifer.jpg'),
                      ),
                    ],
                  ),
                  const SizedBox(height: 40),
                  const AnimatedProgressBar(),
                  const SizedBox(height: 40),
                  PopularCard(
                    height: 210,
                    width: width,
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class AnimatedProgressBar extends StatelessWidget {
  const AnimatedProgressBar({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          decoration: const BoxDecoration(
            color: Color.fromARGB(255, 87, 92, 100),
            borderRadius: BorderRadius.all(
              Radius.circular(250),
            ),
          ),
          child: Stack(
            children: [
              SimpleCircularProgressBar(
                size: 250,
                maxValue: 1000,
                backStrokeWidth: 4,
                backColor: const Color(0xff414958),
                progressColors: const [
                  Color(0xfffe6622),
                  Color(0xffffd411),
                ],
                animationDuration: 2,
                valueNotifier: ValueNotifier(617),
                onGetText: (double value) {
                  return Text(
                    style: const TextStyle(
                      fontSize: 30,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  );
                },
              ),
              Positioned(
                top: 43,
                left: 96,
                child: Image.asset("assets/energy.png"),
              ),
              Positioned(
                top: 150,
                left: 75,
                child: Text(
                  "REMAINING",
                  style: Theme.of(context).textTheme.titleMedium!.copyWith(
                        color: const Color(0xff59606e),
                        letterSpacing: 2.5,
                      ),
                ),
              )
            ],
          ),
        ),
        const SizedBox(height: 60),
        const Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            TextWidget(
              title: "1383",
              subTitle: "CONSUMED",
            ),
            TextWidget(
              title: "471",
              subTitle: "BURNED",
            ),
            TextWidget(
              title: "912",
              subTitle: "NET",
            ),
          ],
        ),
      ],
    );
  }
}

class TextWidget extends StatelessWidget {
  final String title;
  final String subTitle;
  const TextWidget({
    super.key,
    required this.title,
    required this.subTitle,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          title,
          style: Theme.of(context).textTheme.headlineSmall!.copyWith(
                color: Colors.white,
                fontWeight: FontWeight.bold,
              ),
        ),
        const SizedBox(height: 6.666),
        Text(
          subTitle,
          style: Theme.of(context).textTheme.titleSmall!.copyWith(
                color: const Color(0xff59606e),
              ),
        ),
      ],
    );
  }
}

class PopularCard extends StatelessWidget {
  const PopularCard({
    super.key,
    required this.height,
    required this.width,
  });

  final double height;
  final double width;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Divider(
          color: Color(0xff313a48),
        ),
        const SizedBox(height: 20),
        Text(
          "Popular",
          style: Theme.of(context).textTheme.headlineMedium!.copyWith(
                color: Colors.white,
              ),
        ),
        const SizedBox(height: 20),
        CardData(
          height: height,
          width: width,
          image: "assets/chicken.png",
          text: "Chicken & spring green bun cha",
        ),
      ],
    );
  }
}

class CardData extends StatelessWidget {
  const CardData({
    super.key,
    required this.height,
    required this.width,
    required this.image,
    required this.text,
  });

  final double height;
  final double width;
  final String image;
  final String text;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => DetailScreen(image: image, text: text),
          ),
        );
      },
      child: Container(
        height: height,
        width: width,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(25),
          gradient: const LinearGradient(
            colors: [
              Color(0xff2f3949),
              Color(0xff131923),
            ],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Hero(
              tag: "image",
              child: Image.asset(
                image,
                scale: 2.5,
                fit: BoxFit.cover,
              ),
            ),
            Text(
              text,
              style: Theme.of(context).textTheme.titleLarge!.copyWith(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
            ),
          ],
        ),
      ),
    );
  }
}
    `,
  },

  {
    id: "info-screen",
    title: "Info Screen",
    image: covidInfo,
    code: `
    import 'package:flutter/material.dart';
import 'package:fyp/templates/healthy_food_template/detail_scree.dart';
import 'package:simple_circular_progress_bar/simple_circular_progress_bar.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    return Scaffold(
      body: SafeArea(
        child: Container(
          height: height,
          width: width,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                Color(0xff2f3949),
                Color(0xff131923),
              ],
            ),
          ),
          child: Padding(
            padding: const EdgeInsets.all(20),
            child: SingleChildScrollView(
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Hello Jennifer",
                        style: Theme.of(context)
                            .textTheme
                            .headlineMedium!
                            .copyWith(
                              color: const Color(0xfffbfbfe),
                              fontWeight: FontWeight.bold,
                            ),
                      ),
                      const CircleAvatar(
                        radius: 25,
                        backgroundImage: AssetImage('assets/jennifer.jpg'),
                      ),
                    ],
                  ),
                  const SizedBox(height: 40),
                  const AnimatedProgressBar(),
                  const SizedBox(height: 40),
                  PopularCard(
                    height: 210,
                    width: width,
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class AnimatedProgressBar extends StatelessWidget {
  const AnimatedProgressBar({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          decoration: const BoxDecoration(
            color: Color.fromARGB(255, 87, 92, 100),
            borderRadius: BorderRadius.all(
              Radius.circular(250),
            ),
          ),
          child: Stack(
            children: [
              SimpleCircularProgressBar(
                size: 250,
                maxValue: 1000,
                backStrokeWidth: 4,
                backColor: const Color(0xff414958),
                progressColors: const [
                  Color(0xfffe6622),
                  Color(0xffffd411),
                ],
                animationDuration: 2,
                valueNotifier: ValueNotifier(617),
                onGetText: (double value) {
                  return Text(
                    {(value).toInt()},
                    style: const TextStyle(
                      fontSize: 30,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  );
                },
              ),
              Positioned(
                top: 43,
                left: 96,
                child: Image.asset("assets/energy.png"),
              ),
              Positioned(
                top: 150,
                left: 75,
                child: Text(
                  "REMAINING",
                  style: Theme.of(context).textTheme.titleMedium!.copyWith(
                        color: const Color(0xff59606e),
                        letterSpacing: 2.5,
                      ),
                ),
              )
            ],
          ),
        ),
        const SizedBox(height: 60),
        const Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            TextWidget(
              title: "1383",
              subTitle: "CONSUMED",
            ),
            TextWidget(
              title: "471",
              subTitle: "BURNED",
            ),
            TextWidget(
              title: "912",
              subTitle: "NET",
            ),
          ],
        ),
      ],
    );
  }
}

class TextWidget extends StatelessWidget {
  final String title;
  final String subTitle;
  const TextWidget({
    super.key,
    required this.title,
    required this.subTitle,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          title,
          style: Theme.of(context).textTheme.headlineSmall!.copyWith(
                color: Colors.white,
                fontWeight: FontWeight.bold,
              ),
        ),
        const SizedBox(height: 6.666),
        Text(
          subTitle,
          style: Theme.of(context).textTheme.titleSmall!.copyWith(
                color: const Color(0xff59606e),
              ),
        ),
      ],
    );
  }
}

class PopularCard extends StatelessWidget {
  const PopularCard({
    super.key,
    required this.height,
    required this.width,
  });

  final double height;
  final double width;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Divider(
          color: Color(0xff313a48),
        ),
        const SizedBox(height: 20),
        Text(
          "Popular",
          style: Theme.of(context).textTheme.headlineMedium!.copyWith(
                color: Colors.white,
              ),
        ),
        const SizedBox(height: 20),
        CardData(
          height: height,
          width: width,
          image: "assets/chicken.png",
          text: "Chicken & spring green bun cha",
        ),
      ],
    );
  }
}

class CardData extends StatelessWidget {
  const CardData({
    super.key,
    required this.height,
    required this.width,
    required this.image,
    required this.text,
  });

  final double height;
  final double width;
  final String image;
  final String text;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => DetailScreen(image: image, text: text),
          ),
        );
      },
      child: Container(
        height: height,
        width: width,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(25),
          gradient: const LinearGradient(
            colors: [
              Color(0xff2f3949),
              Color(0xff131923),
            ],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Hero(
              tag: "image",
              child: Image.asset(
                image,
                scale: 2.5,
                fit: BoxFit.cover,
              ),
            ),
            Text(
              text,
              style: Theme.of(context).textTheme.titleLarge!.copyWith(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
            ),
          ],
        ),
      ),
    );
  }
}`,
  },
  
  // Add more objects for additional content, each with a unique id
];
