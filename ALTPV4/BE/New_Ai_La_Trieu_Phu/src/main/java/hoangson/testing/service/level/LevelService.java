package hoangson.testing.service.level;

import hoangson.testing.entity.Level;
import hoangson.testing.repository.ILevelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LevelService implements ILevelService {
    @Autowired
    ILevelRepository levelRepository;

    @Override
    public List<Level> getAllLevels() {
        return levelRepository.findAll();
    }
}
