import dayjs from 'dayjs';
import Article from '../model/articles';
import { v4 as uuidv4 } from 'uuid';

class ArticlesController {
  static async postAnArticle(req, res) {
    const { description, title } = req.body;
    const { _id } = req.user;

    const newArticle = new Article({
      articleId: uuidv4(),
      title,
      description,
      author: _id,
      createdAt: dayjs().format('DD-MM-YYYY h:mm:ss A'),
    });
    await Article.create(newArticle);
    return res.status(201).json({
      newArticle,
      message: 'Article added successfully',
    });
  }

  static async getAllArticles(req, res) {
    const foundArticles = await Article.find().populate({
      path: 'author',
      model: 'user',
    });
    if (foundArticles.length === 0) {
      return res.status(200).json({ message: 'there are no articles' });
    }
    return res.json(foundArticles);
  }

  static async getArticleWithId(req, res) {
    const { id } = req.params;

    const oneArticle = await Article.findOne({ articleId: id });
    if (!oneArticle) {
      return res.status(400).json({ message: 'this article doesnt exist' });
    }
    return res.status(200).json({ article: oneArticle });
  }

  static async updateAnArticle(req, res) {
    const { id } = req.params;
    const { title, body } = req.body;

    await Article.findOneAndUpdate(
      { articleId: id },
      { title, body, updatedAt: dayjs().format('YYYY-MM-DD h:mm:ss A') }
    );
    const updatedArticle = await Article.findOne({ articleId: id });
    return res.status(201).json({ updatedArticle, message: 'Article updated' });
  }

  static async deleteAnArticle(req, res) {
    const { id } = req.params;
    const deletedArticle = await Article.findOne({ articleId: id });
    if (!deletedArticle) {
      return res.status(400).json({
        message: 'This article does not exist',
      });
    }
    await deletedArticle.remove();
    return res.status(204).json({});
  }
}
export default ArticlesController;
